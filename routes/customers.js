const express = require('express');
const auth = require('../middleware/auth');
const { Customer, validate } = require('../models/customer');
const router = express.Router();

router.get('/', async (req, res) => {
    let customer = await Customer.find().sort('age');
    res.send(customer);
});

router.post('/', auth, async (req, res) => {
    let { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    let customer = new Customer({
        name: req.body.name,
        course: req.body.course,
        age: req.body.age
    });

    customer = await customer.save();
    res.send(customer);
});

router.get('/:id', async (req, res) => {
    let customer = await Customer.findById(req.params.id);
    if (!customer)
        return res.status(404).send('Berilgan ID ga teng bo\'lgan toifa topilmadi');
    res.send(customer);
});

router.put('/:id', auth, async (req, res) => {
    let { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);
    let customer = await Customer.findByIdAndUpdate(req.params.id, { name: req.body.name, course: req.body.course, age: req.body.age }, {new: true});
    if (!customer)
        return res.status(404).send('Berilgan ID ga teng bo\'lgan toifa topilmadi');
    res.send(customer);
});

router.delete('/:id', auth, async (req, res) => {
    let customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer)
        return res.status(404).send('Berilgan ID ga teng bo\'lgan toifa topilmadi');
    res.send(customer);
});

module.exports = router;