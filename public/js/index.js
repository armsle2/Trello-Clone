$(document).ready(() => {

	$('#submit-board').on('click', (event)=>{
		// event.preventDefault();
		let board = {
			name: $('#board-name').val()
		};
		$.post('/api/boards', board).then(data=>{
		});
	});

	$('#submit').on('click', (event) => {
		event.preventDefault();
		console.log('ready');

		let board = {
			name: $('#board-name').val()
		};
		let list = {
			title: $('#list-name').val(),
			task: $('#task').val(),
		};
		// console.log(board);
		$.post('/api/lists', list).then(data=>{
				console.log(data);
			
		});
	})

});