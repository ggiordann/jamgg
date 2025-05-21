import React from 'react';
import './HostInsightsPage.css';

const HostInsightsPage = () => {
  // Mock data for host insights
  const hostInsightsData = {
    totalJamsHosted: 15,
    peakListenerCountOverall: 128,
    averageListenersPerJam: 45,
    mostPopularGenres: ["Lo-Fi Hip Hop", "Synthwave", "Ambient Chill", "Indie Folk"],
    topEngagingJams: [
      { id: 1, jamTitle: "Retro Future Wave", engagementScore: 95 },
      { id: 2, jamTitle: "Chill Study Beats Marathon", engagementScore: 92 },
      { id: 3, jamTitle: "Ambient Dreams for Sleep", engagementScore: 88 },
      { id: 4, jamTitle: "Indie Acoustic Showcase", engagementScore: 85 },
    ],
  };

  return (
    <div className="host-insights-page">
      <header className="insights-header">
        <h1>Your Host Insights</h1>
        <p>An overview of your activity and engagement as a Jam.gg host.</p>
      </header>

      <section className="key-metrics-summary">
        <div className="metric-card">
          <h3>Total Jams Hosted</h3>
          <p className="metric-value">{hostInsightsData.totalJamsHosted}</p>
        </div>
        <div className="metric-card">
          <h3>Peak Listener Count</h3>
          <p className="metric-value">{hostInsightsData.peakListenerCountOverall}</p>
        </div>
        <div className="metric-card">
          <h3>Avg. Listeners / Jam</h3>
          <p className="metric-value">{hostInsightsData.averageListenersPerJam}</p>
        </div>
      </section>

      <section className="insights-details">
        <div className="popular-genres card">
          <h2>Most Popular Genres</h2>
          <ul>
            {hostInsightsData.mostPopularGenres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
          {hostInsightsData.mostPopularGenres.length === 0 && <p>No genre data yet.</p>}
        </div>

        <div className="top-engaging-jams card">
          <h2>Top Engaging Jams</h2>
          {hostInsightsData.topEngagingJams.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Jam Title</th>
                  <th>Engagement Score</th>
                </tr>
              </thead>
              <tbody>
                {hostInsightsData.topEngagingJams.map((jam) => (
                  <tr key={jam.id}>
                    <td>{jam.jamTitle}</td>
                    <td>{jam.engagementScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No top engaging jams data yet.</p>
          )}
        </div>
      </section>

      <section className="chart-placeholders">
        <div className="chart-placeholder card">
          <h3>Listener Trends Chart (Placeholder)</h3>
          <p>A visual representation of listener numbers over time will be shown here.</p>
        </div>
        <div className="chart-placeholder card">
          <h3>Genre Popularity Chart (Placeholder)</h3>
          <p>A chart showing the popularity distribution of genres you've hosted will be displayed here.</p>
        </div>
      </section>
    </div>
  );
};

export default HostInsightsPage;
