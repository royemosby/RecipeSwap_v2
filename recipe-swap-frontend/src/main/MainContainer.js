import React, {Component} from 'react'
import RecipesContainer from '../recipes/RecipesContainer'
import AuthModal from './AuthModal'

class mainContainer extends Component{
  render(){
    return(
      <div className={["skeleton", "main-overflow"].join(" ")}>
        <h1>MainContainer</h1>
        <p>Laboris sint sint quis exercitation nulla sint est quis duis ullamco qui labore dolor. Duis amet ut irure incididunt velit id labore eu irure occaecat duis ad. Excepteur veniam aliqua Lorem mollit ad ipsum minim dolor cupidatat non consectetur fugiat. Laborum est sunt voluptate nulla commodo. Lorem commodo minim ea cillum deserunt nostrud velit quis sunt proident ea eu. Pariatur sint sint ullamco non in quis id ad tempor enim.</p>
        <p>Id fugiat culpa do cupidatat proident aliquip laborum. Consequat officia aliqua pariatur nostrud laboris sunt eu veniam dolor. Esse ea adipisicing amet anim ad consequat velit duis pariatur ullamco ipsum. Enim ad veniam excepteur aute commodo reprehenderit est id occaecat sunt proident eu mollit. Enim consectetur ullamco in quis qui magna excepteur sint quis. Cupidatat qui est sunt dolore sint irure eiusmod.</p>
        <p>Nisi adipisicing incididunt ullamco velit enim. Aliquip ipsum elit esse voluptate pariatur et duis ex. Occaecat reprehenderit magna qui occaecat in anim anim ex excepteur qui do incididunt sit enim. In ullamco eiusmod qui nostrud aute sunt anim est velit occaecat ad esse consequat.</p>
        <p>Aute dolor culpa minim ex velit est proident cupidatat adipisicing irure adipisicing. Sit aute aute duis ut mollit irure Lorem qui anim et. Sint exercitation incididunt eu nisi incididunt voluptate et elit laborum commodo consequat ex consectetur. Sint sunt pariatur nostrud culpa exercitation anim aliqua est et. Anim magna ad est culpa minim fugiat culpa sunt ad aute. Velit sit id aliqua cillum ullamco ullamco dolor do eu cillum anim. Duis occaecat do est eiusmod aliqua.</p>
        <p>Pariatur do adipisicing labore minim non incididunt eiusmod laborum veniam anim enim sit. Ut laboris anim duis velit irure consequat Lorem. Fugiat aliquip cillum mollit adipisicing anim fugiat adipisicing minim adipisicing amet consectetur consectetur et. Non adipisicing cillum enim sit pariatur ullamco exercitation culpa proident esse aliqua eu sint. Sint nisi aliquip culpa minim minim dolor reprehenderit veniam excepteur irure nulla sit. Laborum est irure elit anim aute ea enim duis nostrud anim laborum sit. Nostrud occaecat dolore culpa ullamco.</p>
        <p>Velit ipsum sint anim magna ut. Qui duis quis amet ut excepteur exercitation ex ad fugiat sit. Eiusmod culpa commodo fugiat in dolore esse in ut exercitation non ea. Non tempor aliquip ex ut in nulla fugiat do id ipsum.</p>
        <p>Irure aute culpa veniam adipisicing quis officia occaecat. Ad magna dolore commodo excepteur velit. Lorem est elit aute laboris cillum exercitation anim tempor ipsum.</p>
        <p>Do consectetur proident cillum voluptate incididunt. Anim sit in exercitation aliquip ullamco Lorem aliquip eu. Sit cillum est dolor aute non commodo labore qui tempor nisi ad est magna. Labore laborum elit nostrud ut Lorem occaecat.</p>
        
        <AuthModal/>
        <RecipesContainer/>
        
      </div>
    )
  }
}

export default mainContainer