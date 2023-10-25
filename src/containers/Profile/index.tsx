import { useState, useEffect } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { ColumnsType } from "antd/es/table";

interface dataProfile {
    _id: string;
    username: string;
    password: string;
    role: boolean;
}

const Profile = () => {
    const [dataUser, setDataUser] = useState<dataProfile[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {

        const apiUrl = 'https://week-17-eoa03.cyclic.app/auth'

            try {
                const response = await fetch(apiUrl, {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data && Array.isArray(data.data) && data.data.length > 0) {
                        setDataUser(data.data);
                    } else {
                        console.error("Data is not in the expected format");
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const columns: ColumnsType<dataProfile> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Password',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
    ];

    return (
        <>
            <h2>Profile Page</h2>
            {Array.isArray(dataUser) && dataUser.length > 0 ? (
                <Table dataSource={dataUser} columns={columns} />
            ) : (
                <p>No data available</p>
            )}
            <div>
                <Button type="primary" onClick={() => navigate('/')}>Back</Button>
            </div>
        </>
    );
}

export default Profile;