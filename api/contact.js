module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Método não permitido" });
  }

  const source = req.body?.source || "site";
  console.log("Novo contato Elevate:", { source });

  return res.status(200).json({ ok: true, message: "Contato registrado com sucesso!" });
};
