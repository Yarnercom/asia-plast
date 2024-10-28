import React from 'react';

const TitleInternalComponents = ({title}) => {
    return (
        <h2 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200 pb-2 mb-4">
            {title}
        </h2>
    );
};

export default TitleInternalComponents;