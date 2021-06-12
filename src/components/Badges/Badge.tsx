import React from 'react';

import emppol from '../../assets/images/emp-pol.png';
import fillpol from '../../assets/images/fill-pol.png';
import user from '../../assets/icons/user.png';
import briefcase from '../../assets/icons/briefcase.png';

import '../../styles/Badge.scss';

interface Props {
    title: string;
    children: string;
    developer: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Badge = ({ title, children, developer, onClick }: Props): JSX.Element => {
    return (
        <div className={`badge ${developer ? '--developer' : null}`}>
            <div className="badge-icon">
                {developer ? (
                    <>
                        <img src={fillpol} />
                        <img src={user} />{' '}
                    </>
                ) : (
                    <>
                        <img src={emppol} />
                        <img src={briefcase} />{' '}
                    </>
                )}
            </div>
            <div className="badge-text">
                <p className="badge-title">{title}</p>
                <p className="badge-info">{children}</p>
            </div>
            <button className="badge-next" onClick={onClick}>
                Next
            </button>
        </div>
    );
};
export default Badge;
