var JSX = require('node-jsx').install(),
        React = require('react');

module.exports = {
    index : function(req,res){
        // Render our Homepage
        res.render('home', {
            state: 'Pass'
        });
    }
}