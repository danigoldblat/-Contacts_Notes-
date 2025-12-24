
export const Auth = async (req, res) => {
  try {
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};