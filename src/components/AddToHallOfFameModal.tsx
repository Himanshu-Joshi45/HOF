import { useState, type FormEvent } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AddToHallOfFameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddToHallOfFameModal({ isOpen, onClose }: AddToHallOfFameModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    batch_year: '',
    achievement: '',
    company: '',
    position: '',
    linkedin_url: '',
    image_url: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('hall_of_fame').insert([
        {
          name: formData.name,
          batch_year: formData.batch_year,
          achievement: formData.achievement,
          company: formData.company || null,
          position: formData.position || null,
          linkedin_url: formData.linkedin_url || null,
          image_url: formData.image_url || null,
          description: formData.description || null,
        },
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        batch_year: '',
        achievement: '',
        company: '',
        position: '',
        linkedin_url: '',
        image_url: '',
        description: '',
      });

      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-zinc-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-zinc-800">
        <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Add to Hall of Fame</h2>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="batch_year" className="block text-sm font-medium text-zinc-300 mb-2">
              Batch Year *
            </label>
            <input
              type="text"
              id="batch_year"
              required
              value={formData.batch_year}
              onChange={(e) => setFormData({ ...formData, batch_year: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g., 2020-2024"
            />
          </div>

          <div>
            <label htmlFor="achievement" className="block text-sm font-medium text-zinc-300 mb-2">
              Notable Achievement *
            </label>
            <input
              type="text"
              id="achievement"
              required
              value={formData.achievement}
              onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your key achievement"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Current company"
            />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-zinc-300 mb-2">
              Position / Role
            </label>
            <input
              type="text"
              id="position"
              value={formData.position}
              onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Your current role"
            />
          </div>

          <div>
            <label htmlFor="linkedin_url" className="block text-sm font-medium text-zinc-300 mb-2">
              LinkedIn Profile URL
            </label>
            <input
              type="url"
              id="linkedin_url"
              value={formData.linkedin_url}
              onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-zinc-300 mb-2">
              Profile Image URL
            </label>
            <input
              type="url"
              id="image_url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="https://example.com/your-photo.jpg"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-zinc-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              placeholder="Tell us more about your achievements and journey..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400">
              Successfully submitted! Your entry will be reviewed and approved soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400">
              Something went wrong. Please try again.
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
