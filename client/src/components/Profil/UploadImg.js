import axios from 'axios';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadPicture } from '../../features/userSlices';

const UploadImg = (e) => {
    const [file, setFile] = useState();
    const dispatch = useDispatch();
    const formRef = useRef();
    const userData = useSelector((state) => state.user.user);

    const handlePicture = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('name', userData.pseudo);
        data.append('userId', userData._id);
        data.append('profilPicture', file);

        axios
            .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
            .then(() => {
                axios
                    .get(`${process.env.REACT_APP_API_URL}api/user/${userData._id}`)
                    .then((res) => {dispatch(uploadPicture(res.data.picture)); console.log(res.data.picture)})
                    .catch((error) => console.log(error));
                formRef.current.reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <form
            action=''
            onSubmit={handlePicture}
            className='upload-pic'
            encType='multipart/form-data'
            ref={formRef}>
            <label htmlFor='file'>Changer d'image</label>
            <input
                type='file'
                id='file'
                name='profilPicture'
                accept='.jpg, .jpeg, .png'
                onChange={(e) => setFile(e.target.files[0])}
            />
            <br />
            <input type='submit' value='Envoyer' />
        </form>
    );
};

export default UploadImg;
