import { Group, FullGroupInfo, GroupPosts, GroupRequestProps, GroupUser } from '../../types/group';

const web = 'http://91.241.64.178:5561/';

interface FetchData {
  method: string;
}

export default class {
  static urlBase = web;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async fetching(path: string, data?: FetchData): Promise<any> {
    const res: Response = await fetch(`${this.urlBase}${path}`, data);
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.json();
  }

  static async apiGroups(page = 1, size = 15): Promise<Group[]> {
    return this.fetching(`api/v2/groups?page=${page}&size=${size}`);
  }

  static async apiGroupInfo(id: string, page = 1, size = 15): Promise<GroupPosts[]> {
    return this.fetching(`api/v2/groups/${id}/posts?page=${page}&size=${size}`);
  }

  static async apiSingleGroup(id: string): Promise<FullGroupInfo> {
    return this.fetching(`api/v2/groups/${id}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async apiLoadUsers({ groupId, page, size }: GroupRequestProps): Promise<GroupUser[]> {
    return this.fetching(`api/v2/groups/${groupId}/users?page=${page}&size=${size}`);
  }

  static async apiJoinGroup({ groupId }: GroupRequestProps): Promise<string> {
    const res: Response = await fetch(
      `${this.urlBase}api/v2/groups/${groupId}/users?userId=${10}`,
      {
        method: 'PUT',
      }
    );
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.text();
  }

  static async apiLeaveGroup({ groupId }: GroupRequestProps): Promise<string> {
    const res: Response = await fetch(
      `${this.urlBase}api/v2/groups/${groupId}/users?userId=${10}`,
      {
        method: 'DELETE',
      }
    );
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.text();
  }

  /// //// update group
  static async apiUpadteGroup({
    description,
    groupCategory,
    linkSite,
    addressImageGroup,
    name,
    id,
  }: {
    description: string;
    groupCategory: string;
    linkSite: string;
    addressImageGroup: string;
    name: string;
    id: number;
  }): Promise<string> {
    const res: Response = await fetch(`${this.urlBase}api/v2/groups/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        addressImageGroup,
        description,
        groupCategory,
        id: Number(id),
        linkSite,
        name,
      }),
    });
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.json();
  }
}
