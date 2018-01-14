$(document).ready(() => {

	$('#submit-board').on('click', (event)=>{
		// event.preventDefault();
		let board = {
			name: $('#board-name').val()
		};
		$.post('/api/boards', board).then(data=>{
			console.log(data)
			console.log(window.location.href);
			let url = window.location.href;
			window.location.assign(url+'boards');
		}
			
			);
	});

	$('.submit-list').on('submit', (event) => {
		event.preventDefault();
		console.log('ready');
		let list = {
			title: $('#list-name').val(),
			BoardId: $('.submit-list').attr('data-id')
		};
		console.log(list);
		$.post('/api/lists', list).then(data=>{
				console.log(data);
			
		});
	});

	$('#submit').on('click', (event) => {
		event.preventDefault();
		console.log('ready');

		let list = {
			title: $('#list-name').val(),
			task: $('#task').val()
		};
		// console.log(board);
		$.post('/api/lists', list).then(data=>{
				console.log(data);
			
		});
	});

});