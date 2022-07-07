import React, { ChangeEvent } from 'react';

interface ItemI {
  id: number;
  title: string;
  status: number;
}

interface TodoItemInterface {
    handleTodoRemove: (id: number) => void;
    todo: ItemI;
}

class Form extends React.Component<{} , {newTask: ItemI, todoList: Array<ItemI>}> {
  constructor(props: TodoItemInterface) {
    super(props);
    this.state = {
      newTask: {
        id: 0,
        title: "",
        status: 0,
      },
      todoList: [
        {
          id: 1,
          title: "Give dog a bath",
          status: 1,
        },
        {
          id: 2,
          title: "Do laundry",
          status: 0,
        },
        {
          id: 3,
          title: "Vacuum floor",
          status: 0,
        },
        {
          id: 4,
          title: "Feed cat",
          status: 1,
        },
        {
          id: 5,
          title: "Change light bulbs",
          status: 0,
        },
        {
          id: 6,
          title: "Go to store",
          status: 2,
        },
        {
          id: 7,
          title: "Fill gas tank",
          status: 2,
        },
        {
          id: 8,
          title: "Change linens",
          status: 0,
        },
        {
          id: 9,
          title: "Learn React Typescript",
          status: 1,
        },
        {
          id: 10,
          title: "Bake cookies",
          status: 0,
        },
      ],
    };

    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log("SELECT EVENT: ", event.target.value);
    this.setState({
      newTask: {
        ...this.state.newTask,
        id: this.state.todoList.length + 1,
        status: Number(event.target.value),
      },
    });
  }

  handleInputValue(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("INPUT EVENT: ", event.target.value);
    this.setState({
      newTask: {
        ...this.state.newTask,
        title: event.target.value,
      },
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("NEW TASK: ", this.state.newTask);

    this.setState((state) => {
      const todoList = state.todoList.concat(state.newTask);

      return {
        todoList,
        newTask: {
          id: 0,
          title: "",
          status: 0,
        },
      };

    });

    console.log("TODO LIST: ", this.state.todoList);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className='text-center mt-5 mb-3'>
        <h3 className="text-center">TodoList</h3>
          <input
            type="text"
            value={this.state.newTask.title}
            onChange={this.handleInputValue}
          />

          <label>
            Selectionnez :
            <select
              value={this.state.newTask.status}
              onChange={this.handleChange}
            >
              <option value="0">Todo</option>
              <option value="1">Doing</option>
              <option value="2">Done</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>

        <div className="mx-auto text-center mt-2 p-3" id="todoList">
          <div className="row first">
            <div className="col border m-4 todo">
              <h4>Tasks todo</h4>
              <hr />
              {this.state.todoList.map(
                (data) =>
                  data.status <= 0 && (
                    <>
                      <ul key={data.id} className="list-group">
                        <li className="list-group-item border-0">
                          {data.title}
                          <div className="item-remove" >
                            ⨯
                          </div>
                        </li>
                      </ul>
                    </>
                  )
              )}
         
            </div>
          
            
            <div className="col border m-4">
              <h4>Tasks doing</h4>
              <hr />
              {this.state.todoList.map(
                (data) =>
                  data.status == 1 && (
                    <>
                      <ul key={data.id} className="list-group">
                        <li className="list-group-item border-0">
                          {data.title}
                        <div className="item-remove">
                          ⨯
                        </div>
                        </li>
                      </ul>
                    </>
                  )
              )}
            </div>

            <div className="col border m-4">
              <h4>Tasks done</h4>
              <hr />
              {this.state.todoList.map(
                (data) =>
                  data.status > 1 && (
                    <>
                      <ul key={data.id} className="list-group">
                        <li className="list-group-item border-0">
                          {data.title}
                        <div className="item-remove">
                          ⨯
                        </div>
                        </li>
                      </ul>
                    </>
                  )
              )}
            </div>
          </div>
    
        </div>
      </>
    );
  }
}

export default Form ;