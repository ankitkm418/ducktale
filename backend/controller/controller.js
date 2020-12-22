let Data = require('../model/data');


exports.createForm =  (req, res) => {
    console.log(req.body);
    console.log(req.body.image)
    var data = new Data({

        title : req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        class: req.body.class,
        subject: req.body.subject,
        marks: req.body.marks

    });

    data.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

exports.findForm = (req, res) => {
    Data.find()
        .then(Data => {
            res.send(Data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });
};



exports.Datadetailbyid = (req, res) => {
    console.log(req.query)
    Data.findById(req.query.id)
        .then(Data => {
            res.send(Data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });

}


exports.update = (req, res) => {
    console.log(req.body);

    Data.findByIdAndUpdate(req.params.id, {
        title : req.body.title,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        class: req.body.class,
        subject: req.body.subject,
        marks: req.body.marks

    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id "
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id "
                });
            }
            return res.status(500).send({
                message: "Error updating note with id "
            });
        });
};


exports.delete = (req, res) => {
    console.log(req.params.id)
    Data.findByIdAndDelete(req.params.id)
        .then(Data => {
            res.send(Data);
            console.log('deleted')
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving regs."
            });
        });

}


