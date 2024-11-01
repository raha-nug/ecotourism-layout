const getThemes = async (req, res) => {
  const themes = await fetch(`${process.env.BASE_URL}/assesment/listTheme`, {
    headers: {
      Authorization: req.cookies.token,
    },
  });

  const response = await themes.json();

  res.render('components')
};



module.exports = {getThemes}