export default function Profile(props) {
  const id = props.match.params.id;
  console.log(props);
  return <div>
    <h2>Profile page입니다.</h2>
    {id && <p>id 는 {id} 입니다.</p>}
    </div>;
}