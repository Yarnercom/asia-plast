import React from 'react';
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons-react';

interface ViewSwitcherProps {
    viewMode: 'card' | 'list';
    onChange: (mode: 'card' | 'list') => void;
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ viewMode, onChange }) => {
    return (
        <div className="flex items-center justify-end gap-4 my-4">
            <button
                className={`border rounded-[6px] ${viewMode === 'card' ? 'border-[#008ECC]' : 'border-[#716e6e]'}`}
                onClick={() => onChange('card')}
            >
                <IconLayoutGrid color={viewMode === 'card' ? '#008ECC' : '#716e6e'} size={20} />
            </button>
            <button
                className={`border rounded-[6px] ${viewMode === 'list' ? 'border-[#008ECC]' : 'border-[#716e6e]'}`}
                onClick={() => onChange('list')}
            >
                <IconLayoutList color={viewMode === 'list' ? '#008ECC' : '#716e6e'} size={20} />
            </button>
        </div>
    );
};

export default ViewSwitcher;
