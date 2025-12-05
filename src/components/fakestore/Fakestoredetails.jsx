import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Fakestoredetails = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setError(null);

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.json();
            })
            .then((product) => {
                setData(product);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <div>Fakestoredetails</div>
            {data && (
                <div>
                    <h2>{data.title}</h2>
                    <img
                        src={data.image}
                        alt={data.title}
                        style={{ width: "200px", height: "200px" }}
                    />
                    <p>Price: ${data.price}</p>
                    <p>{data.description}</p>
                </div>
            )}
        </div>
    );
};

export default Fakestoredetails;