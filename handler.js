"use strict";

module.exports.soma = async event => {
  const query = event.queryStringParameters;
  let body;

  if (!query)
    body = {
      error: { message: "Non existing parameters. Try /soma?a=1&b=2" },
    };
  else {
    const a = Number(query.a);
    const b = Number(query.b);

    body =
      !a || !b
        ? { error: { message: "Non numeric parameters. Ex.: /soma?a=1&b=c" } }
        : { resultado: a + b };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(body, null, 2),
  };
};
