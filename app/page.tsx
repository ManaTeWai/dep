import { Htag, Button, P, Tag, RatingState, Menu } from '../components';

export default async function Home() {
  return (
    <>
      <Htag tag="h1">Главная страница</Htag>
      <Button appearance="primary" arrow='right' className='tp'>Button</Button>
      <Button appearance="ghost" arrow='down'>ghost</Button>
      <P size='large'>{process.env.NEXT_PUBLIC_DOMAIN}</P>
      <P size='large'>Большой</P>
      <P size='medium'>Средний</P>
      <P size='small'>Маленький</P>
      <Tag size='medium' color='green'>Tag</Tag>
      <RatingState />
      <Menu/>
    </>
  );
}