const login = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log in");
    }

    const me = await fetch(`${process.env.BASE_URL}/auth/auth-me`, {
      headers: {
        Authorization: data.token,
      },
    });

    const meData = await me.json();

    if (!me.ok) {
      throw new Error(data.message || "Failed to log in");
    }

     res.cookie("token", data.token, {
       httpOnly: true,
       secure: true,
       sameSite: "strict",
       maxAge: 24 * 60 * 60 * 1000, //1 day
     });

    res.json({
      role: meData.data.role,
      url: `/${meData.data.role === "applier" ? "users" : meData.data.role}`,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message || "An error occurred" });
  }
};




module.exports = { login };
