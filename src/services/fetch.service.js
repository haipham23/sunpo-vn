import Prismic from 'prismic-javascript';

const prismicApi = 'https://sunpo-vn.cdn.prismic.io/api/v2';

const fetchByUid = async (type, uid) => {
  const api = await Prismic.api(prismicApi)
  const response = await api.getByUID(type, uid);

  return response;
};

export {
  fetchByUid,
};
