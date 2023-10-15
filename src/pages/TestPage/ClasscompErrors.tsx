import React from 'react';

type MyProps = {
  // message?: string;
};
type MyState = {
  options: number[];
  value: string;
  name: string;
  option: number;
};
export default class ClasscompErrors extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      options: [1, 2, 3, 4, 5],
      value: 'устройство',
      name: 'Название',
      option: 1,
    };
    //! ошибка: не хватало this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_option = this.handleChange_option.bind(this);
  }

  //! ошибка
  // Uncaught Error: Maximum update depth exceeded.
  // This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
  // componentDidUpdate(prevProps: MyProps) {
  //   this.setState({ name: `${this.state.name}!` });
  // }
  // вариант 1 - первый рендер
  componentDidMount() {
    const { name } = this.state;
    this.setState({ name: `${name}!` });
  }

  // вариант 2 - условие
  componentDidUpdate(prevProps: MyProps, prevState: MyState) {
    const { name, value, option } = this.state;
    if ((prevState.value !== value) || (prevState.option !== option)) {
      this.setState({ name: `${name}!` });
    }
  }

  handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    //! ошибка: this.state.value = e.target.value;
    this.setState({ value: e.target.value });
  }

  handleChange_option(e: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ option: Number(e.target.value) });
  }

  render() {
    const { name, value, option, options } = this.state;
    return (
      <div className="MarkdownEditor">
        <h3>{name}</h3>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={value}
        />
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h3>Оценка</h3>
        <select
          value={option}
          onChange={this.handleChange_option}
        >
          {/* ! ошибка: options.map вместо options.forEach  */}
          {options.map((entry: number) => (
            <option key={entry}>
              {entry}
            </option>
          ))}
        </select>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h3>Вывод</h3>
        <div
          className="content"
        >
          {value}
          {' имеет оценку'}
          {option}
        </div>
      </div>
    );
  }
}
