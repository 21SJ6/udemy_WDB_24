let input = prompt("What would you like to do?")
    const todos = ['Collect Dragon Eggs', 'Clean The Cauldron']
    while (input !== 'quit' && input !== 'q') {
        if(input === 'list') {
            console.log("**************")
            for(let i = 0; i < todos.length; i++) {
                console.log(`${todos[i]}`);
            }
            console.log("**************")
        } else if (input === 'new'){
            const newTodo = prompt ("Okay, what is the new to-do?");
            todos.push(newTodo);
            console.log(`${newTodo} added to the list!`)
        } else if (input === 'delete') {
            const index = parseInt (prompt("Okay, enter an idex to delete:"));
            if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Okay, deleted ${deleted[0]}`);
            } else {
                console.log('Unknown index')
            }
        }
        input = prompt ("What would you like to do?")
    }
        console.log("Okay! Quit The App!")