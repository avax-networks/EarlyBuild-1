import * as contentful from 'contentful-management';

export const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});
