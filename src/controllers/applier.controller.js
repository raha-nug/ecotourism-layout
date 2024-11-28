const getAllData = async (req,res) => {
  const response = await fetch(
    `${process.env.BASE_URL}/assesment/listTheme`,
    {
      headers: {
        Authorization: req.cookies.token,
      },
    }
  );

  const themes = await response.json();

  const fetchCriteria = async (themeId) => {
    const response = await fetch(
      `${process.env.BASE_URL}/assesment/listCriteriaByTheme?theme_id=${themeId}`,
      {
        headers: {
          Authorization: req.cookies.token,
        },
      }
    );

    const {data : criteria} = await response.json();
    return criteria;
  };

  const fetchIndicator = async (criteriaId) => {
    const response = await fetch(
      `${process.env.BASE_URL}/assesment/listIndicatorByCriteria?criteria_id=${criteriaId}`,
      {
        headers: {
          Authorization: req.cookies.token,
        },
      }
    );

    const { data: indicators } = await response.json(); // Pastikan `data` ada
    return indicators || []; // Tambahkan default untuk menghindari null
  };

 const themesWithData = await Promise.all(
   themes.data.map(async (theme) => {
     const criteria = await fetchCriteria(theme.id);

     // Fetch indicators untuk setiap criteria
     const criteriaWithIndicators = await Promise.all(
       criteria.map(async (criterion) => {
         const indicators = await fetchIndicator(criterion.id);
         return { ...criterion, indicators };
       })
     );

     return { ...theme, criteria: criteriaWithIndicators };
   })
 );


  return themesWithData
};


module.exports = { getAllData };
