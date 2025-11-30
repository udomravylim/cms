var express = require('express');
var router = express.Router();

const sequenceGenerator = require('./sequenceGenerator');
const Message = require('../models/message');
const Contact = require('../models/contact');
const mongoose = require('mongoose');

// GET all messages
router.get('/', (req, res, next) => {
  Message.find()
    .populate('sender')
    .exec()
    .then(messages => {
      res.status(200).json(messages);
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
});

// GET a single message by id
router.get('/:id', (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .populate('sender')
    .exec()
    .then(message => {
      if (!message) {
        return res.status(404).json({
          message: 'Message not found'
        });
      }
      res.status(200).json({
        message: 'Message fetched successfully!',
        messageData: message
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// POST a new message
router.post('/', (req, res, next) => {
  const maxMessageId = sequenceGenerator.nextId("messages");

  // Helper function to get Contact _id from id string or ObjectId
  const getContactId = (senderId) => {
    // If it's already a valid ObjectId, use it
    if (mongoose.Types.ObjectId.isValid(senderId) && senderId.toString().length === 24) {
      return Promise.resolve(senderId);
    }
    // First, try to look up by the id field
    return Contact.findOne({ id: senderId })
      .then(contact => {
        if (contact) {
          return contact._id;
        }
        // If not found by id, try to find by name
        return Contact.findOne({ name: senderId })
          .then(contactByName => {
            if (!contactByName) {
              throw new Error(`Contact not found with id or name: ${senderId}`);
            }
            return contactByName._id;
          });
      });
  };

  getContactId(req.body.sender)
    .then(contactObjectId => {
      const message = new Message({
        id: maxMessageId,
        subject: req.body.subject,
        msgText: req.body.msgText,
        sender: contactObjectId
      });

      return message.save();
    })
    .then(createdMessage => {
      // Populate sender before sending response
      return Message.findById(createdMessage._id)
        .populate('sender')
        .exec();
    })
    .then(populatedMessage => {
      res.status(201).json({
        message: 'Message added successfully',
        messageData: populatedMessage
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// PUT update an existing message
router.put('/:id', (req, res, next) => {
  // Helper function to get Contact _id from id string or ObjectId
  const getContactId = (senderId) => {
    // If it's already a valid ObjectId, use it
    if (mongoose.Types.ObjectId.isValid(senderId) && senderId.toString().length === 24) {
      return Promise.resolve(senderId);
    }
    // First, try to look up by the id field
    return Contact.findOne({ id: senderId })
      .then(contact => {
        if (contact) {
          return contact._id;
        }
        // If not found by id, try to find by name
        return Contact.findOne({ name: senderId })
          .then(contactByName => {
            if (!contactByName) {
              throw new Error(`Contact not found with id or name: ${senderId}`);
            }
            return contactByName._id;
          });
      });
  };

  Message.findOne({ id: req.params.id })
    .then(message => {
      if (!message) {
        return res.status(404).json({
          message: 'Message not found.'
        });
      }

      return getContactId(req.body.sender)
        .then(contactObjectId => {
          message.subject = req.body.subject;
          message.msgText = req.body.msgText;
          message.sender = contactObjectId;

          return message.save();
        })
        .then(() => {
          // Populate sender before sending response
          return Message.findOne({ id: req.params.id })
            .populate('sender')
            .exec();
        })
        .then(populatedMessage => {
          res.status(200).json({
            message: 'Message updated successfully',
            messageData: populatedMessage
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// DELETE a message
router.delete("/:id", (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .then(message => {
      Message.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "Message deleted successfully"
          });
        })
        .catch(error => {
          res.status(500).json({
            message: 'An error occurred',
            error: error
          });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Message not found.',
        error: { message: 'Message not found'}
      });
    });
});

module.exports = router;
