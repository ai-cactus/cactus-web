'use client';
// Temporarily commented out to resolve TypeScript errors
/*
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { useOnboarding } from './onboarding-context';

export function Step5TeamMembers() {
  const { formData, updateFormData } = useOnboarding();
  const [newMember, setNewMember] = useState({ name: '', role: '', email: '' });
  const [isAdding, setIsAdding] = useState(false);

  const addTeamMember = () => {
    if (newMember.name && newMember.role && newMember.email) {
      updateFormData({
        teamMembers: [...formData.teamMembers, { ...newMember }]
      });
      setNewMember({ name: '', role: '', email: '' });
      setIsAdding(false);
    }
  };

  const removeTeamMember = (index: number) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers.splice(index, 1);
    updateFormData({ teamMembers: updatedMembers });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
        <p className="mt-1 text-gray-600">Add your team members (optional)</p>
      </div>

      {formData.teamMembers.length > 0 && (
        <div className="space-y-3">
          {formData.teamMembers.map((member, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm text-gray-500">{member.email}</p>
              </div>
              <button
                type="button"
                onClick={() => removeTeamMember(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}

      {isAdding ? (
        <div className="space-y-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <Input
                value={newMember.name}
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <Input
                value={newMember.role}
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                placeholder="e.g., Doctor, Nurse"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                type="email"
                value={newMember.email}
                onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={() => setIsAdding(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={addTeamMember}
              disabled={!newMember.name || !newMember.role || !newMember.email}
            >
              Add Member
            </Button>
          </div>
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          onClick={() => setIsAdding(true)}
          className="mt-2"
        >
          <Plus className="h-4 w-4 mr-2" /> Add Team Member
        </Button>
      )}

      <p className="text-sm text-gray-500">
        You can skip this step and add team members later from your dashboard.
      </p>
    </div>
  );
}
*/
