const xtpl = require('xtpl')
const path = require('path')
const databasetool = require(path.join(__dirname, './../tools/databasetool.js'))


exports.getStudentListPage = (req, res) => {
    const keyword = req.query.keyword || ''

    databasetool.getlist('studentInfo', {name: {$regex: keyword}}, (err, docs) => {
        xtpl.renderFile(path.join(__dirname, "../statics/views/list.html"), {
            students: docs,
            keyword
        }, function (error, content) {
            res.send(content)
        });
    })
}