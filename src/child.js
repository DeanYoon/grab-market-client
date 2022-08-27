function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <p>
        I'm {name} and {age} years old
      </p>
    </div>
  );
}

export default ChildComponent;
