import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/health", (req,res) => {
    res.status(200).json("ok");
});

if (process.env.NODE_END !== "test"){
    app.listen(PORT, () => {
        console.log(`The server is running on Port ${PORT}`);
    });
}

export default app;