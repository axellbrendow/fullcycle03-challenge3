"use strict";

module.exports.soma = async event => {
  const query = event.queryStringParameters;
  let body;

  if (!query)
    body = {
      error: { message: "Parâmetros inexistentes. Tente /soma?a=1&b=2" },
    };
  else {
    const a = Number(query.a);
    const b = Number(query.b);

    body =
      !a || !b
        ? { error: { message: "Parâmetros não numéricos. Ex.: /soma?a=1&b=c" } }
        : { resultado: a + b };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(body, null, 2),
  };
};
