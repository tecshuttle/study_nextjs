import CC from './customer-care'
import axios from 'axios';

export default function APP(props) {
  return <CC tags={props.tags}/>
}

export async function getServerSideProps(context) {
  let tags = [1, 2, 3];

  tags = await axios.get('http://www.tomtalk.net/tag_api/getListTotal').then(res => {
    return res.data;
  });

  return {
    props: {
      tags: tags
    }
  }
}