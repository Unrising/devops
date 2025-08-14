import express from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/health", (req,res) => {
    res.status(200).json({ status: 'ok' });
});

if (process.env.NODE_ENV !== "test"){
    app.listen(PORT, () => {
        console.log(`The server is running on Port ${PORT}`);
    });
}

export default app;