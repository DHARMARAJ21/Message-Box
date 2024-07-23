document.getElementById('accept-btn').addEventListener('click', function() {
    alert('You accepted: ' + document.getElementById('user-input').value);
});

document.getElementById('decline-btn').addEventListener('click', function() {
    alert('You declined.');
});
