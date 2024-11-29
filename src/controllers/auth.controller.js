const login = async (req, res) => {
  try {
    const response = await fetch(
      `https://api-es.alkisahcinema.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log in");
    }

    res.cookie("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, //1 day
    });

    res.json({
      role: data.role,
      url: `/${data.role}`,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message || "An error occurred" });
  }
};

const register = async (req, res) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/register`, {
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

    res.json({ status: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message || "An error occurred" });
  }
};

const logout = async (req, res) => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/auth/logout`, {
      method: "POST",

      headers: {
        Authorization: req.cookies.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log out");
    }

    res.clearCookie("token");
    res.redirect("/auth/login");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: error.message || "An error occurred" });
  }
};

module.exports = { login, register, logout };
