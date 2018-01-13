$(document).ready(() => {

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
		$.post('/api/boards', board).then(data=>{
				console.log(data.id);
				list.BoardId = data.id

			$.post('/api/lists', list).then(data=>{
				console.log(data);
			})
		})
	})

});