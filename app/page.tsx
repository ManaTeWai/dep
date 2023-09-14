import { Htag, Button, P, Tag, Rating_state } from '../components';


export default function Home() {

  return (
    <>
      Главная страница
        <Htag tag="h1">text</Htag>
        <Button appearance="primary" arrow='right' className='tp'>Button</Button>
        <Button appearance="ghost" arrow='down'>ghost</Button>
        <P size='large'>Большой</P>
        <P size='medium'>Средний</P>
        <P size='small'>Маленький</P>
        <Tag size='medium' color='green'>Tag</Tag>
        <Rating_state />
    </>
  );
}