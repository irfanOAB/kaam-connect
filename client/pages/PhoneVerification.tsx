import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';

export default function PhoneVerification() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');

  useEffect(() => {
    if (step === 'otp' && timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setCanResend(true);
    }
  }, [step, timer]);

  const handleSendOTP = () => {
    if (phone.length === 10) {
      setStep('otp');
      setTimer(30);
      setCanResend(false);
      // Here you would typically call an API to send OTP
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Here you would typically verify the OTP with backend
      
      // Store user role and redirect accordingly
      localStorage.setItem('kaamconnect_user_role', role || 'worker');
      localStorage.setItem('kaamconnect_phone', phone);
      
      if (role === 'worker') {
        navigate('/worker-home');
      } else {
        navigate('/job-provider-home');
      }
    }
  };

  const handleResendOTP = () => {
    setTimer(30);
    setCanResend(false);
    // Resend OTP logic here
  };

  const isPhoneValid = phone.length === 10;
  const isOTPValid = otp.length === 6;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto p-6 pt-16">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => step === 'otp' ? setStep('phone') : navigate('/role-selection')}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="flex-1 text-center text-xl font-semibold text-gray-800">
            {step === 'phone' ? 'Enter Phone Number' : 'Verify OTP'}
          </h1>
        </div>

        {step === 'phone' ? (
          <>
            {/* Phone Input */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-brand-blue/10 rounded-full flex items-center justify-center">
                <Phone className="w-10 h-10 text-brand-blue" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Enter Your Mobile Number
              </h2>
              <p className="text-gray-600 mb-8">
                अपना मोबाइल नंबर दर्ज करें
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
                    <span className="text-gray-600">🇮🇳 +91</span>
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit number"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  />
                </div>
                {phone.length > 0 && phone.length < 10 && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid 10-digit number</p>
                )}
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={!isPhoneValid}
                className="w-full py-4 text-lg font-semibold bg-brand-blue hover:bg-blue-600 disabled:opacity-50"
              >
                Send OTP / ओटीपी भेजें
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* OTP Input */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-brand-green/10 rounded-full flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-brand-green" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Enter Verification Code
              </h2>
              <p className="text-gray-600 mb-2">
                सत्यापन कोड दर्ज करें
              </p>
              <p className="text-sm text-gray-500">
                We sent a 6-digit code to +91 {phone}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  6-Digit OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter 6-digit OTP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-brand-green focus:border-transparent"
                />
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={!isOTPValid}
                className="w-full py-4 text-lg font-semibold bg-brand-green hover:bg-green-600 disabled:opacity-50"
              >
                Verify & Continue / सत्यापित करें
              </Button>

              {/* Resend OTP */}
              <div className="text-center">
                {canResend ? (
                  <button
                    onClick={handleResendOTP}
                    className="text-brand-blue font-medium hover:underline"
                  >
                    Resend OTP / ओटीपी फिर से भेजें
                  </button>
                ) : (
                  <p className="text-gray-500">
                    Resend OTP in {timer}s
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
