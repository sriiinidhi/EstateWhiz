#include <iostream>
#include <vector>
#include <queue>
#include <map>

using namespace std;

const int INF = 1e9;

struct NodeState {
    int time;
    int node;
    int visitedMask;

    bool operator>(const NodeState& other) const {
        return time > other.time;
    }
};

map<int, int> createMarkedNodeIndexMap(const vector<int>& markedNodes) {
    map<int, int> nodeToIndex;
    for (int i = 0; i < markedNodes.size(); ++i) {
        nodeToIndex[markedNodes[i]] = i;
    }
    return nodeToIndex;
}

vector<vector<int>> initializeDistanceTable(int numNodes, int numMarked) {
    return vector<vector<int>>(numNodes, vector<int>(1 << numMarked, INF));
}

int updateVisitedMask(int currentMask, int node, const map<int, int>& markedIndexMap) {
    if (markedIndexMap.count(node)) {
        return currentMask | (1 << markedIndexMap.at(node));
    }
    return currentMask;
}

int findShortestPathVisitingAllMarked(int start, int destination,
    const vector<vector<pair<int, int>>>& adjacencyList,
    const vector<int>& markedNodes) {
    
    int totalNodes = adjacencyList.size();
    int totalMarked = markedNodes.size();

    auto markedIndexMap = createMarkedNodeIndexMap(markedNodes);
    auto minTime = initializeDistanceTable(totalNodes, totalMarked);

    priority_queue<NodeState, vector<NodeState>, greater<NodeState>> pq;

    int startMask = updateVisitedMask(0, start, markedIndexMap);
    minTime[start][startMask] = 0;
    pq.push({0, start, startMask});

    while (!pq.empty()) {
        NodeState current = pq.top();
        pq.pop();

        if (current.time > minTime[current.node][current.visitedMask]) {
            continue;
        }

        for (const auto& edge : adjacencyList[current.node]) {
            int neighbor = edge.first;
            int weight = edge.second;

            int newMask = updateVisitedMask(current.visitedMask, neighbor, markedIndexMap);
            int newTime = current.time + weight;

            if (newTime < minTime[neighbor][newMask]) {
                minTime[neighbor][newMask] = newTime;
                pq.push({newTime, neighbor, newMask});
            }
        }
    }

    int requiredMask = (1 << totalMarked) - 1;
    return minTime[destination][requiredMask];
}
