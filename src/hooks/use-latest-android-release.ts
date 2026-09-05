import { useEffect, useState } from "react";

const GITHUB_REPO = "inc256/XplainfyAI";
const RELEASE_API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

interface GitHubReleaseAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  assets: GitHubReleaseAsset[];
}

interface LatestAndroidRelease {
  apkUrl: string | null;
  version: string;
  loading: boolean;
}

export const useLatestAndroidRelease = (): LatestAndroidRelease => {
  const [release, setRelease] = useState<LatestAndroidRelease>({
    apkUrl: null,
    version: "",
    loading: true,
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchLatestRelease = async () => {
      try {
        const response = await fetch(RELEASE_API_URL, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`GitHub release request failed with ${response.status}`);
        }

        const latestRelease = (await response.json()) as GitHubRelease;
        const apk = latestRelease.assets.find((asset) =>
          asset.name.toLowerCase().endsWith(".apk"),
        );

        if (!controller.signal.aborted) {
          setRelease({
            apkUrl: apk?.browser_download_url ?? null,
            version: latestRelease.tag_name,
            loading: false,
          });
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Failed to get latest Android release:", error);
          setRelease({ apkUrl: null, version: "", loading: false });
        }
      }
    };

    void fetchLatestRelease();

    return () => controller.abort();
  }, []);

  return release;
};