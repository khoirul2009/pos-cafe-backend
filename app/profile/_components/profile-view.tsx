'use client';
import { useState } from 'react';
import HomeLayout from '@/components/layout/home-layout';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';

export default function ProfileView() {
  const session = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
    try {
      const response = await axios.post('/api/password-reset', {
        password: formData.currentPassword,
        new_password: formData.newPassword
      });

      toast.success('Success change password');
    } catch (error: any) {
      toast.error('Failed to change password');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <HomeLayout>
      <div className="min-h-[80vh]  px-4 py-12">
        <div className="mx-auto max-w-2xl rounded-lg  shadow-md">
          {/* Profile Info Section */}
          <div className="border-b border-gray-200 p-8">
            <h1 className="mb-6 text-3xl font-bold ">Profile</h1>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <User className="h-5 w-5 " />
                <div>
                  <p className="text-sm ">Name</p>
                  <p className="text-lg font-medium ">
                    {session.data?.user?.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-5 w-5 " />
                <div>
                  <p className="text-sm ">Email</p>
                  <p className="text-lg font-medium ">
                    {session.data?.user?.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Change Password Form */}
          <div className="p-8">
            <h2 className="mb-6 text-xl font-semibold ">Change Password</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="mb-2 block text-sm font-medium "
                >
                  Current Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    id="currentPassword"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover: absolute right-3 top-1/2 -translate-y-1/2 "
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="mb-2 block text-sm font-medium "
                >
                  New Password
                </label>
                <Input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium "
                >
                  Confirm New Password
                </label>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="flex w-full gap-2">
                <Lock className="h-5 w-5" />
                <span>Update Password</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
