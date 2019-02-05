var todoList=[];
var ulList=$("ul");

$(".fa-plus").on("click",function(event){
	$("input[type='text']").fadeToggle();
	event.stopPropagation();
});

//Adding the line through effect when clicked
$("ul").on("click","li",function(){
	$(this).toggleClass("deleteTodo");
});

//Deleting the todos 
$("div").on("click","span",function(event){
 $(this).parent().fadeOut(500,function(){
 	$(this).remove();
 });
 event.stopPropagation();
}
);

//Adding the todo
$("input").on("keypress",function(event){
	if(event.which===13){
	var newTodo=$(this).val();
	todoList.push(newTodo);
	addTodoToList(newTodo);
	$(this).val("");
	}
});

var addTodo =function(){
	var newTodo=inputTodo.val();
	todoList.push(newTodo);
	addTodoToList(newTodo);
	inputTodo.val("");
}


function addTodoToList(todo){
	ulList.append("<li><span><i class=\"fa fa-trash\"></i></span> "+todo+"</li>");
}

