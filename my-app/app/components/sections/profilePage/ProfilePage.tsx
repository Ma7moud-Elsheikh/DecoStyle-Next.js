'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

interface UserProfile {
    name: string;
    email: string;
    bio: string;
    avatar: File | null;
}

const ProfilePage: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile>({
        name: '',
        email: '',
        bio: '',
        avatar: null
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setProfile((prev) => ({ ...prev, avatar: e.target.files![0] }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(profile);
        alert('Profile submitted!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6" style={{ backgroundColor: 'var(--bg-color)' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--main-color)' }}>
                    My Profile
                </h1>

                {/* Avatar */}
                <div className="flex justify-center mb-6">
                    {profile.avatar ? <Image src={URL.createObjectURL(profile.avatar)} alt="avatar" width={100} height={100} className="rounded-full object-cover" /> : <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xl">?</div>}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium" style={{ color: 'var(--text-color)' }}>
                            Name
                        </label>
                        <input type="text" name="name" value={profile.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" style={{ borderColor: 'var(--main-color)', color: 'var(--text-color)' }} placeholder="Your Name" required />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium" style={{ color: 'var(--text-color)' }}>
                            Email
                        </label>
                        <input type="email" name="email" value={profile.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" style={{ borderColor: 'var(--main-color)', color: 'var(--text-color)' }} placeholder="you@example.com" required />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium" style={{ color: 'var(--text-color)' }}>
                            Bio
                        </label>
                        <textarea name="bio" value={profile.bio} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:outline-none" style={{ borderColor: 'var(--main-color)', color: 'var(--text-color)' }} placeholder="Tell us about yourself..." rows={3} />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium" style={{ color: 'var(--text-color)' }}>
                            Avatar
                        </label>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" style={{ color: 'var(--text-color)' }} />
                    </div>

                    <button type="submit" className="w-full py-2 rounded-lg font-semibold transition-colors" style={{ backgroundColor: 'var(--main-color)', color: '#fff' }}>
                        Save Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
