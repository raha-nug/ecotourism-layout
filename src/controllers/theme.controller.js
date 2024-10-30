const getThemes = async (req, res) => {
const token = "El9iDwWjtiEISv8nMWFhLv3V2wl6ttU8neHauDPK9383b9cd";

  const themes = await fetch(`${process.env.BASE_URL}/assesment/listTheme`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await themes.json();

  console.log(response)
  res.send(response);
};



module.exports = {getThemes}