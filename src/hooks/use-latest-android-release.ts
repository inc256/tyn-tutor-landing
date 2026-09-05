const ANDROID_APK_URL =
  "https://jxspadbxbgcskasnqejs.supabase.co/storage/v1/object/public/releases/androidApp-release.apk";

interface LatestAndroidRelease {
  apkUrl: string | null;
  version: string;
  loading: boolean;
}

export const useLatestAndroidRelease = (): LatestAndroidRelease => {
  return {
    apkUrl: ANDROID_APK_URL,
    version: "",
    loading: false,
  };
};