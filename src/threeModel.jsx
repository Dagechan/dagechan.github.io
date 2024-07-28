function Box(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Box;