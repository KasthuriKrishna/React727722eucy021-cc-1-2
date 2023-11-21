function MyApp(){
    return<Greeting name="kasthuri"/>
}
function Greeting(props){
    return(
      <h1>
      Hello! {props.name} welcome to react!!
      </h1>
    );
}
export default MyApp;