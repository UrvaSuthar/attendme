import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
	projectId:"tb9fzavr",
	dataset:"production",
	useCdn: true,
	apiVersion:"2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
	return builder.image(source);
}

export  async function fetchData() {
	const data = await client.fetch(`*[]}{}`);
	console.log(data);
      };
 
export default client;