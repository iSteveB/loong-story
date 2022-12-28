import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addPost, getPosts } from '../../features/postsSlices';
import { timestampParser } from '../utils';

const NewPostForm = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [postPicture, setPostPicture] = useState(null);
    const [video, setVideo] = useState('');
    const [file, setFile] = useState(null);
    const userData = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handlePicture = (e) => {
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
        setVideo('');
    };

    

    const handlePost = async () => {
        if (message || postPicture || video) {
            const data = new FormData();
            data.append('posterId', userData._id);
            data.append('message', message);
            data.append('video', video);
            if (file) data.append('file', file);

            await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}api/post/`,
                data: data,
            })
                .then(() => {
                    axios
                        .get(`${process.env.REACT_APP_API_URL}api/post/`)
                        .then((res) => {
                            dispatch(getPosts({ data: res.data }));
                            dispatch(addPost(res.data));
                        })
                        .catch((error) => console.log(error));
                        cancelPost()
                    
                })
                .catch((error) => console.log(error));
        } else {
            alert('Entrez un message !');
        }
    };
    const cancelPost = () => {
        setMessage('');
        setPostPicture('');
        setVideo('');
        setFile(null);
    };

    useEffect(() => {
        if (userData) setIsLoading(false);

        const handleVideo = () => {
            let findLink = message.split(' ');
    
            for (let i = 0; i < findLink.length; i++) {
                if (
                    findLink[i].includes('https://www.youtube') ||
                    findLink[i].includes('https://youtube')
                ) {
                    let embed = findLink[i].replace('watch?v=', 'embed/');
                    setVideo(embed.split('&')[0]);
                    findLink.splice(i, 1);
                    setMessage(findLink.join(' '));
                    setPostPicture('');
                }
            }
        };

        handleVideo();
    }, [userData, message, video]);

    return (
        <div className='post-container'>
            {isLoading ? (
                <i className='fas fa-spinner fa-pulse'></i>
            ) : (
                <>
                    <div className='data'>
                        <p>
                            <span>
                                {userData.following
                                    ? userData.following.length
                                    : 0}
                            </span>{' '}
                            Abonnement
                            {userData?.following.length > 1 ? 's' : null}
                        </p>
                        <p>
                            <span>
                                {userData.followers
                                    ? userData.followers.length
                                    : 0}
                            </span>{' '}
                            Abonné
                            {userData?.followers.length > 1 ? 's' : null}
                        </p>
                    </div>
                    <NavLink to='/profil'>
                        <div className='user-info'>
                            <img src={userData?.picture} alt='user' />
                        </div>
                    </NavLink>

                    <div className='post-form'>
                        <textarea
                            name='message'
                            id='message'
                            placeholder='Quoi de neuf ?'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                        {message || postPicture || video.length > 20 ? (
                            <li className='card-container'>
                                <div className='card-left'>
                                    <img src={userData.picture} alt='user' />
                                </div>
                                <div className='card-right'>
                                    <div className='card-header'>
                                        <div className='pseudo'>
                                            <h3>{userData.pseudo}</h3>
                                        </div>
                                        <span>
                                            {timestampParser(Date.now())}
                                        </span>
                                    </div>
                                    <div className='content'>
                                        <p>{message}</p>
                                        {postPicture && (
                                            <img src={postPicture} alt='post' />
                                        )}
                                        {video && (
                                            <iframe
                                                src={video}
                                                title={video}
                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                                allowFullScreen></iframe>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ) : null}
                        <div className='footer-form'>
                            <div className='icon'>
                                {video ? null : (
                                    <>
                                        <img
                                            src='./img/icons/picture.svg'
                                            alt='img'
                                        />
                                        <input
                                            type='file'
                                            name='file'
                                            id='file-upload'
                                            accept='.jpg, .jpeg, .png'
                                            onChange={(e) => handlePicture(e)}
                                        />
                                    </>
                                )}
                                {video && (
                                    <button onClick={() => setVideo('')}>
                                        Supprimer la vidéo
                                    </button>
                                )}
                            </div>
                            <div className='btn-send'>
                                {message || postPicture || video.length > 20 ? (
                                    <button
                                        className='cancel'
                                        onClick={cancelPost}>
                                        Annuler le message
                                    </button>
                                ) : null}
                                <button
                                    className='button-send'
                                    onClick={handlePost}>
                                    Envoyer
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewPostForm;
